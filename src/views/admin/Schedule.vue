<template>
  <div>
    <h2>Schedule page</h2>
  </div>

  <CCard>
    <CCardBody>Schedule for creating available timeslots</CCardBody>
  </CCard>

  <CCard>
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Datum</CTableHeaderCell>
          <CTableHeaderCell scope="col">Korn</CTableHeaderCell>
          <CTableHeaderCell scope="col">Vete</CTableHeaderCell>
          <CTableHeaderCell scope="col">Havre</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableHeaderCell scope="row">1</CTableHeaderCell>
          <CTableDataCell>2022-09-01</CTableDataCell>
          <CTableDataCell>0/2</CTableDataCell>
          <CTableDataCell>1/2</CTableDataCell>
          <CTableDataCell>2/2</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">2</CTableHeaderCell>
          <CTableDataCell>Jacob</CTableDataCell>
          <CTableDataCell>Thornton</CTableDataCell>
          <CTableDataCell>@fat</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">3</CTableHeaderCell>
          <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
          <CTableDataCell>@twitter</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  </CCard>
</template>

<script></script>
