namespace BackendValkrusman.Models
{
    public class Kasutaja
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Parool { get; set; }
        public string Perenimi { get; set; }

        public Kasutaja(int id, string name, string parool, string perenimi)
        {
            Id = id;
            Name = name;
            Parool = parool;
            Perenimi = perenimi;
        }
    }
}
