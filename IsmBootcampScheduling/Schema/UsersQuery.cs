using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;
using IsmBootcampScheduling.Services;

namespace IsmBootcampScheduling.Schema
{
    public class UsersQuery : ObjectGraphType<object>
    {
        public UsersQuery(IUserService users)
        {
            Name = "Query";
            Field<ListGraphType<UserType>>(
                "users",
                resolve: context => users.GetUsersAsync()
            );
        }
    }
}
