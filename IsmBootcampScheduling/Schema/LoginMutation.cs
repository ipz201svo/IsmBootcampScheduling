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

                    //if (user.Password != loginFields.Password)
                    //{
                    //    return null;
                    //}

                    return user;
                }
                );


        }
    }
}
