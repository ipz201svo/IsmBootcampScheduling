using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IsmBootcampScheduling.Models;

namespace IsmBootcampScheduling.Services
{
    public class UserService : IUserService
    {
        private IList<User> _users;

        public UserService()
        {
            _users = new List<User>();

            _users.Add(new User()
            {
                Email = "email1@gmail.com",
                Id = 1,
                Password = "password1"
            });
            _users.Add(new User()
            {
                Email = "email2@gmail.com",
                Id = 2,
                Password = "password2"
            });
        }
        public User GetUserById(int id)
        {
            return GetCustomerByIdAsync(id).Result;
        }

        public Task<User> GetCustomerByIdAsync(int id)
        {
            return Task.FromResult(_users.Single(u => Equals(u.Id, id)));
        }

        public Task<IEnumerable<User>> GetUsersAsync()
        {
            return Task.FromResult(_users.AsEnumerable());
        }
    }

    public interface IUserService
    {
        User GetUserById(int id);

        Task<User> GetCustomerByIdAsync(int id);

        Task<IEnumerable<User>> GetUsersAsync();
    }
}
