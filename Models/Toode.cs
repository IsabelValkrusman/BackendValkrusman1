﻿namespace BackendValkrusman.Models
{
       public class Tooted
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public double Price { get; set; }
            public bool IsActive { get; set; }
            /*
            public Toode()
            {
            }

            public Toode(int id, string name, double price, bool isActive)
            {
                Id = id;
                Name = name;
                Price = price;
                IsActive = isActive;
            }*/

        }
}