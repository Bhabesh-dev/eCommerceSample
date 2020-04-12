using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eCommerce_Bhabesh.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eCommerce_Bhabesh.Controllers
{
    [Route("api/[controller]")]
    public class RegistrationController : Controller
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }



        [HttpPost]
        [Route("Register")]
        public async Task<object> RegisterUser(User user)
        {
            var appUser = new ApplicationUser()
            {
                UserName = user.UserName,
                Email = user.Email,
                FullName = user.FullName
            };
            try
            {
                var result = await _userManager.CreateAsync(appUser, user.Password);
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw ex;
            }
            
        }




    }
}
