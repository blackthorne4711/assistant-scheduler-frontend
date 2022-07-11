<template>
  <div>
    <h2>Bookings</h2>
  </div>

  <CCard>
    <CCardBody>Current bookings</CCardBody>
  </CCard>

  <CCard>
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Datum</CTableHeaderCell>
          <CTableHeaderCell scope="col">Assistant</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableHeaderCell scope="row">1</CTableHeaderCell>
          <CTableDataCell>2022-09-01</CTableDataCell>
          <CTableDataCell>Erik Bleckhorns</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">2</CTableHeaderCell>
          <CTableDataCell>2022-09-02</CTableDataCell>
          <CTableDataCell>Marika Bleckhorns</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">3</CTableHeaderCell>
          <CTableDataCell>2022-09-03</CTableDataCell>
          <CTableDataCell>Alva Bleckhorns</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  </CCard>
</template>

<script></script>
