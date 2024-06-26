interface Props {
  children: React.ReactNode;
}

export const ListboxWrapper: React.FC<Props> = ({ children }) => (
  <div className='w-full max-w-[260px] border-small px-1 py-2 rounded-small my-4 border-default-200 dark:border-default-100'>
    {children}
  </div>
);
