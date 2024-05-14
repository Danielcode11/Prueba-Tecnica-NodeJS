async function createAutomovil(automovil) {
    const {rows} = await Client.query(
        'INSERT INTO Automovil (precio, modelo, kilometraje, marca) VALUES ($1, $2, $3, $4) RETURNING *',
        [automovil.precio, automovil.modelo, automovil.kilometraje, automovil.marca]
    )
}

module.exports = {
    createAutomovil
}

