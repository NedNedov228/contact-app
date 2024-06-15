import React from 'react'
import Contact from './Contact'


const ContactsList = ({data, currentPage, getAllContacts}) => {




  return (
    <main className='main'>
        {data?.content?.length === 0 && <div>No Contacts</div>}

        <ul className='contact__list'>
            {data?.content?.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </ul>

        {data?.content?.length > 0 && data?.totalPages > 1 && 
            <div className='pagination'>
                <a onClick={() => getAllContacts(currentPage - 1)} className={0 === currentPage ? 'disabled' : ''}>&laquo</a>
                {[...Array(data.totalPages).keys()].map((page,index) => 
                    <a key={index} onClick={() => getAllContacts(page)} className={page === currentPage ? 'active' : ''}>{page + 1}</a>
                )}
                <a onClick={() => getAllContacts(currentPage + 1)} disabled={currentPage === data.totalPages - 1}>&raquo</a>
            </div>
        }
    </main>
  )
}

export default ContactsList