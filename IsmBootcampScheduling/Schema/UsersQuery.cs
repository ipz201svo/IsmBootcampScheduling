using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;
using IsmBootcampScheduling.Data;
using IsmBootcampScheduling.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace IsmBootcampScheduling.Schema
{
    public class UsersQuery : ObjectGraphType<object>
    {
        public UsersQuery()
        {
            Name = "Query";
            Field<ListGraphType<UserType>>(
                "users",
                resolve: context => context.RequestServices.GetRequiredService<UserContext>().Users.ToListAsync()
            );
        }
    }
}
