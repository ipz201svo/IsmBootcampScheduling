using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Types;
using IsmBootcampScheduling.Data;
using IsmBootcampScheduling.Models;
using Microsoft.Extensions.DependencyInjection;


namespace IsmBootcampScheduling.Schema
{
    public class LoginMutation : ObjectGraphType
    {
        public LoginMutation()
        {
            Field<UserType>(
                "login",
                arguments: new QueryArguments(
                    new QueryArgument<LoginInputType> { Name = "loginFields" }
                    ),
                resolve: context =>
                {
                    var loginFields = context.GetArgument<User>("loginFields");
                    var user = context.RequestServices.GetRequiredService<UserContext>()
                        .Users.FirstOrDefault(u => u.Email == loginFields.Email);
                    
                    if (user == null)
                    {
                        return null;
                    }

                    string thingToHash = loginFields.Password + user.Salt;
                    string hashResult = GetStringSha256Hash(thingToHash).ToLower();

                    if (user.Password != hashResult)
                    {
                        return null;
                    }

                    return user;
                }
                );


        }

        internal static string GetStringSha256Hash(string text)
        {
            if (String.IsNullOrEmpty(text))
                return String.Empty;

            using (var sha = new System.Security.Cryptography.SHA256Managed())
            {
                byte[] textData = System.Text.Encoding.UTF8.GetBytes(text);
                byte[] hash = sha.ComputeHash(textData);
                return BitConverter.ToString(hash).Replace("-", String.Empty);
            }
        }
    }
}
