import { getActiveTab } from '../../helpers/tabsHelpers';

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

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = getActiveTab(tabs, activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Li
              tab={tab}
              key={tab.id}
              activeTabId={activeTab.id}
              onClick={onTabSelected}
            />
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {activeTab && activeTab.content}
      </div>
    </div>
  );
};
