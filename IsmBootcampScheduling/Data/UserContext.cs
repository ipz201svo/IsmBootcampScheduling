using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IsmBootcampScheduling.Models;
using Microsoft.EntityFrameworkCore;

namespace IsmBootcampScheduling.Data
{
    public class UserContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {
            
        }
    }
}
