using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TutorialAngularJS.Controllers
{
    public class MiRestController : ApiController
    {
        // GET: api/MiRest
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/MiRest/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/MiRest
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/MiRest/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/MiRest/5
        public void Delete(int id)
        {
        }
    }
}
