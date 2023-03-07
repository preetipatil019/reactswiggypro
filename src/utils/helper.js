export function filterData (searchtxt,restaurants) 
{
	return restaurants.filter((restaurants)=>
	restaurants?.data?.name?.toLowerCase()?.includes(searchtxt?.toLowerCase())
	)
}