export default function Navbar({ activeTab, setActiveTab }) {
    return (
      <ul className="flex p-2 m-auto gap-2 justify-center hover:cursor-pointer rounded-3xl bg-bgcolor2 text-textcolor2 font-semibold">
        {['About Me', 'Experiences', 'Recommended'].map((tab) => (
          <li key={tab} 
              className={`${activeTab === tab ? 'text-white bg-bgcolor3 navButtonShadow' : ''} py-3 w-full text-center rounded-2xl`}
              onClick={() => setActiveTab(tab)}>
            {tab}
          </li>
        ))}
      </ul>
    );
  }
  