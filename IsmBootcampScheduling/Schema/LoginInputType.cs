using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;

namespace IsmBootcampScheduling.Schema
{
    public class LoginInputType : InputObjectGraphType
    {
        public LoginInputType()
        {
            Name = "LoginInput";

            Field<NonNullGraphType<StringGraphType>>("email");

            Field< NonNullGraphType<StringGraphType>>("password");
        }
    }
}
