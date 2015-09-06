using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiCapaNegocio.DAL
{
    public class TutorialInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<TutorialContext>
    {
        protected override void Seed(TutorialContext context)
        {
            var estudiantes = new List<Estudiante>
            {
            new Estudiante{Nombres="Carson",Apellidos="Alexander",FechaVinculacion=DateTime.Parse("2005-09-01")},
            new Estudiante{Nombres="Meredith",Apellidos="Alonso",FechaVinculacion=DateTime.Parse("2002-09-01")},
            new Estudiante{Nombres="Arturo",Apellidos="Anand",FechaVinculacion=DateTime.Parse("2003-09-01")},
            new Estudiante{Nombres="Gytis",Apellidos="Barzdukas",FechaVinculacion=DateTime.Parse("2002-09-01")},
            new Estudiante{Nombres="Yan",Apellidos="Li",FechaVinculacion=DateTime.Parse("2002-09-01")},
            new Estudiante{Nombres="Peggy",Apellidos="Justice",FechaVinculacion=DateTime.Parse("2001-09-01")},
            new Estudiante{Nombres="Laura",Apellidos="Norman",FechaVinculacion=DateTime.Parse("2003-09-01")},
            new Estudiante{Nombres="Nino",Apellidos="Olivetto",FechaVinculacion=DateTime.Parse("2005-09-01")}
            };

            estudiantes.ForEach(s => context.Estudiantes.Add(s));
            context.SaveChanges();
        }
    }
}
