import React from 'react'

export default function Tabs({ tabs, currentTab, setCurrentTab, extraClasses }) {
  return (
    <div className={`tabs-wrapper ${ extraClasses || '' }`}>
      <div className='tabs flex-box items-center'>
        { tabs.map( (tab, index) => (
          <div
            key={ index }
            className={ `tab flex-box items-center content-center ${ currentTab === tab.key ? 'selected' : '' }` }
            onClick={ () => tab.onClick ? tab.onClick() : setCurrentTab(tab.key) }
          >
            { tab.icon &&
              <div className={ `icon fa-light ${ tab.icon }` }/>
            }
            <div className='name'>{ tab.title }</div>
          </div>
        ))}
      </div>
    </div>
  )
}
