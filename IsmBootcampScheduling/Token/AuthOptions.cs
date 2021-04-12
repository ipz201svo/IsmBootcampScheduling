using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace IsmBootcampScheduling.Models
{
    public class AuthOptions
    {
        public const string ISSUER = "MySchedulungAuthServer";
        public const string AUDIENCE = "MySchedulingAuthClient";
        const string KEY = "mysupersecret_secretsuperduperkey!1233";
        public const int LIFETIME = 1;
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
