export interface NalitaDialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function NalitaDialog(props: NalitaDialogProps) {
  const { open, onClose, children, title } = props;

  if (!open) {
    return null;
  }

  return (
    <dialog id="my_modal_1" className="modal" open={open} onClose={onClose}>
      <div className="modal-box">
        {/* header */}
        <h3 className="font-bold text-lg">{title}</h3>

        {/* content */}
        <div>
          {children}
        </div>

        {/* footer */}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
