const OutletData = ({data}) => {
    return (
        <>
            {
                data.map((outlet) => {
                    const {id, outletName, saleOffer} = outlet;

                    return (
                        <tr key={id}>
                            <td>{outletName}</td>
                            <td>{saleOffer}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default OutletData;