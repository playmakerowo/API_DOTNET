using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace proyecto_invitaciones.Migrations
{
    /// <inheritdoc />
    public partial class invitacionesv3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Aceptada",
                table: "Invitaciones",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Aceptada",
                table: "Invitaciones");
        }
    }
}
