const Li = ({ tab, activeTabId, onClick }) => {
  const classValue = activeTabId === tab.id ? 'is-active' : '';

  return (
    <li
      className={classValue}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={event => {
          event.preventDefault();
          // onClick(tab.id);

          if (activeTabId !== tab.id) {
            onClick(tab.id);
          }
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};

export const Tabs = ({ tabs = [], activeTab, onTabSelected }) => {
  const currentTab = activeTab || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Li
              tab={tab}
              key={tab.id}
              activeTabId={currentTab.id}
              onClick={onTabSelected}
            />
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {currentTab && currentTab.content}
      </div>
    </div>
  );
};

// ----------------

// const Li = ({ tab, activeTabId, onClick }) => {
//   const classValue = activeTabId === tab.id ? 'is-active' : '';

//   return (
//     <li
//       className={classValue}
//       data-cy="Tab"
//     >
//       <a
//         href={`#${tab.id}`}
//         data-cy="TabLink"
//         onClick={event => {
//           event.preventDefault();

//           if (activeTabId !== tab.id) {
//             onClick(tab.id);
//           }
//         }}
//       >
//         {tab.title}
//       </a>
//     </li>
//   );
// };

// export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
//   const currentActiveTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

//   return (
//     <div data-cy="TabsComponent">
//       <div className="tabs is-boxed">
//         <ul>
//           {tabs.map(tab => (
//             <Li
//               tab={tab}
//               key={tab.id}
//               activeTabId={currentActiveTab.id}
//               onClick={onTabSelected}
//             />
//           ))}
//         </ul>
//       </div>

//       <div
//         className="block"
//         data-cy="TabContent"
//       >
//         {currentActiveTab && currentActiveTab.content}
//       </div>
//     </div>
//   );
// };
