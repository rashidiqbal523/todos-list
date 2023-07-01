import React from 'react'
 function Footer() {
  return (
    <>
    <div className="container-fluid bg-primary text-white" data-bs-theme="dark">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"></svg>
      </a>
      <span className="text-white">© 2021 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-white" href="/"><svg className="bi" width="24" height="24"><use href="/"></use></svg></a></li>
      <li className="ms-3"><a className="text-white" href="/"><svg className="bi" width="24" height="24"><use href="/"></use></svg></a></li>
      <li className="ms-3"><a className="text-white" href="/"><svg className="bi" width="24" height="24"><use href="/"></use></svg></a></li>
    </ul>
  </footer>
</div>
    </>
  )
}
export default Footer
