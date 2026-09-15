using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class TourismDbContext : DbContext
    {
        public DbSet<Tour> Tours { get; set; }

        public TourismDbContext(DbContextOptions<TourismDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Configure the Tour entity
            modelBuilder.Entity<Tour>(entity =>
            {
                entity.HasKey(t => t.Id);
                entity.Property(t => t.Name).IsRequired().HasMaxLength(100);
                entity.Property(t => t.Description).HasMaxLength(500);
                entity.Property(t => t.Price).HasColumnType("decimal(18,2)");
                entity.Property(t => t.Country).IsRequired().HasMaxLength(100);
                entity.Property(t => t.City).IsRequired().HasMaxLength(100);
            });
        }
    }
}
