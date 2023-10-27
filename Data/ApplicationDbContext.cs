using BackendValkrusman.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using static BackendValkrusman.Models.Tooted;

namespace BackendValkrusman.Data
{
        public class ApplicationDbContext : DbContext
        {
            public DbSet<Tooted> Toodes { get; set; }
            public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
            {
            }
        }
}
