using eCommerce_Bhabesh.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
using Microsoft.EntityFrameworkCore;

namespace eCommerce_Bhabesh.Data.DbContext
{
    public class AuthenticationDBContext : IdentityDbContext
    {
        public AuthenticationDBContext(DbContextOptions options) : base(options)
        {

        }
        //DB sets
        public Microsoft.EntityFrameworkCore.DbSet<ApplicationUser> applicationUsers { get; set; }

    }


}
