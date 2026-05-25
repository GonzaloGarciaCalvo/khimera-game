type ModalType = 'correct' | 'incorrect';

export function Modal({type, isOpen}: {type: ModalType, isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) {

  if (!isOpen) return null

  return (
    <dialog open={isOpen} className='questionResultModal'>
      <p>{type === 'incorrect' ? 'Incorrecto, debes esperar 10 segundos !!' : 'Correcto !!'}</p>
    </dialog>
  )
}