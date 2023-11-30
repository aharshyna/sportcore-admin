export default function ConfirmationModal({
  onClose,
  onConfirm,
  children,
  title,
}) {
  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-600 bg-opacity-50 px-6'>
      <div className='w-96 h-auto'>
        <div className='bg-white h-full w-full p-4 rounded-2xl shadow-2xl'>
          <div className='flex justify-between align-top'>
            {title && <h2>{title}</h2>}
            <button onClick={handleCloseClick} className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          {children && <div className='pt-2'>{children}</div>}

          <div className='flex justify-between'>
            <button
              className='bg-red-600 text-white rounded-md px-2 py-1'
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className='bg-green-600 text-white rounded-md px-2 py-1'
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
