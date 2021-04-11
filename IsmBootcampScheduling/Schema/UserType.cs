using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;
using IsmBootcampScheduling.Models;

namespace IsmBootcampScheduling.Schema
{
    public class UserType : ObjectGraphType<User>
    {
        public UserType()
        {
            Field(u => u.Id);

            Field(u => u.Email);

            Field(u => u.Password);
        }
    }
}
