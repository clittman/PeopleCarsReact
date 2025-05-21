using Microsoft.AspNetCore.Mvc;
using PeopleCarsReact.Data;
using PeopleCarsReact.Web.Models;

namespace PeopleCarsReact.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        private readonly string _connectionString;

        public HomeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("getpeople")]
        public List<Person> GetPeople()
        {
            PeopleCarsRepository repo = new(_connectionString);
            var people = repo.GetPeople();
            return people;
        }

        [Route("addperson")]
        [HttpPost]
        public void AddPerson(Person p)
        {
            PeopleCarsRepository repo = new(_connectionString);
            repo.AddPerson(p);
        }

        [Route("getperson")]
        [HttpPost]
        public Person GetPerson(PersonModel m)
        {
            PeopleCarsRepository repo = new(_connectionString);
            return repo.GetPerson(m.Id);
        }

        [Route("addcar")]
        [HttpPost]
        public void AddCar(Car c)
        {
            PeopleCarsRepository repo = new(_connectionString);
            repo.AddCar(c);
        }


        [Route("getcarsbyid")]
        [HttpPost]
        public List<Car> GetCarsById(PersonModel m)
        {
            PeopleCarsRepository repo = new(_connectionString);
            return repo.GetCarsById(m.Id);
        }


        [Route("deletecarsbyid")]
        [HttpPost]
        public void DeleteCarsById(PersonModel m)
        {
            PeopleCarsRepository repo = new(_connectionString);
            repo.DeleteCarsById(m.Id);
        }
    }
}
