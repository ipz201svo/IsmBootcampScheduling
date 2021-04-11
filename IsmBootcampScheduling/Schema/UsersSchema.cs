using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;

namespace IsmBootcampScheduling.Schema
{
    public class UsersSchema : GraphQL.Types.Schema
    {
        public UsersSchema(IServiceProvider provider) : base(provider)
        {
            Query = provider.GetRequiredService<UsersQuery>();
            Mutation = provider.GetRequiredService<LoginMutation>();
        }
    }
}
