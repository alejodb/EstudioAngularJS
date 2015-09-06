using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiCapaNegocio.DAL
{
    public class TutorialContext : DbContext
    {
        public TutorialContext() : base("TutorialContext")
        {
        }

        public DbSet<Estudiante> Estudiantes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
