import React from 'react'
import UserManagement from './UserManage'
import NotesManagement from './NotesManage'
import AddNotes from './AddNotes'
import Statistics from './Statastics'
import { FaChartSimple, FaCircleUser } from 'react-icons/fa6'
import { GrDocumentText, GrFormAdd } from 'react-icons/gr'
import { IoMdExit } from 'react-icons/io'

const Admin = () => {
  return (
    <>
      <div className="admin-dashboard container-fluid">
        <header className="admin-header">
          <div className="admin-profile">
            {/* <div className="img-section">

            </div> */}
            <h3>Admin</h3>
          </div>

         <h1>Admin Dashboard</h1>
         <div className='header-btn'>
         <span className='button'>Home</span>
         <span className='button'>Notes</span>
         <span data-bs-toggle="tooltip" data-bs-placement="top" title="Logout" className='logout' >{<IoMdExit/>}</span>
         </div>
        </header>
        <nav className="admin-sidebar">
          <ul className="nav-links">
            <li><a data-bs-toggle="tooltip" data-bs-placement="top" title="Chart" href="#stat">{<FaChartSimple />}</a></li>
            <li><a data-bs-toggle="tooltip" data-bs-placement="top" title="Users" href="#users">{<FaCircleUser />}</a></li>
            <li><a data-bs-toggle="tooltip" data-bs-placement="top" title="Notes" href="#notes">{<GrDocumentText />}</a></li>
            <li><a data-bs-toggle="tooltip" data-bs-placement="top" title="Add" href="#addNotes">{<GrFormAdd />}</a></li>
          </ul>
        </nav>
        <div className="section">
          <Statistics/>
          <UserManagement/>
          <NotesManagement/>
          <AddNotes/>
        </div>
      </div>

    </>
  )
}

export default Admin