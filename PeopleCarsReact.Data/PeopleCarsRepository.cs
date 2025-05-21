using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeopleCarsReact.Data
{
    public class PeopleCarsRepository
    {
        private readonly string _connectionString;

        public PeopleCarsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetPeople()
        {
            using var ctx = new PeopleCarsDataContext(_connectionString);
            var people = ctx.People.Include(c => c.Cars).ToList();

            foreach (Person p in people)
            {
                if (p.Cars == null)
                {
                    Console.WriteLine("null");
                }
            }
            return people;
        }

        public void AddPerson(Person p)
        {
            using var ctx = new PeopleCarsDataContext(_connectionString);
            ctx.People.Add(p);
            ctx.SaveChanges();
        }

        public void AddCar(Car c)
        {
            using var ctx = new PeopleCarsDataContext(_connectionString);
            ctx.Cars.Add(c);
            ctx.SaveChanges();
        }

        public Person GetPerson(int id)
        {
            using var ctx = new PeopleCarsDataContext(_connectionString);
            return ctx.People.FirstOrDefault(p => p.Id == id);
        }

        public List<Car> GetCarsById(int id)
        {
            using var ctx = new PeopleCarsDataContext(_connectionString);
            return ctx.Cars.Where(c => c.PersonId == id).ToList();
        }

        public void DeleteCarsById(int id)
        {
            using var ctx = new PeopleCarsDataContext(_connectionString);
            var cars = GetCarsById(id);
            ctx.Cars.RemoveRange(cars);
            ctx.SaveChanges();
        }
    }
}
