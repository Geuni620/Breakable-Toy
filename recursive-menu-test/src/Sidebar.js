import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const SidebarItem = ({label, items, depthStep = 10, depth = 0, ...rest}) => {
  return (
    <>
      <ListItem button dense {...rest}>
        <ListItemText style={{paddingLeft: depth * depthStep}}>
          <span>{label}</span>
        </ListItemText>
      </ListItem>

      {Array.isArray(items) ? (
        <List disablePadding dense>
          {items.map((subItem) => {
            return (
              <SidebarItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              ></SidebarItem>
            );
          })}
        </List>
      ) : null}
    </>
  );
};

const Sidebar = ({items}) => {
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {items.map(({label, name, items: subItems, ...rest}) => {
          return (
            <React.Fragment key={name}>
              <ListItem style={{paddingLeft: 18}} key={name} button {...rest}>
                <ListItemText>{label}</ListItemText>
              </ListItem>

              {Array.isArray(subItems) ? (
                <List disablePadding>
                  {subItems.map((subItem) => {
                    return (
                      <ListItem
                        key={subItem.name}
                        style={{paddingLeft: 36}}
                        button
                        dense
                      >
                        <ListItemText className="sidebar-item-text">
                          <span className="sidebar-subitem-text">
                            {subItem.label}
                          </span>
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              ) : null}
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
};

export default Sidebar;
