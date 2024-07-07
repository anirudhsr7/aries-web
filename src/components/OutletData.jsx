const OutletData = ({data}) => {
    return (
        <>
            {
                data.map((outlet) => {
                    const {id, name} = outlet;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default OutletData;