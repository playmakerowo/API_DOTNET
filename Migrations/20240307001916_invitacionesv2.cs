using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace proyecto_invitaciones.Migrations
{
    /// <inheritdoc />
    public partial class invitacionesv2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdEvento",
                table: "Invitaciones",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdEvento",
                table: "Invitaciones");
        }
    }
}
