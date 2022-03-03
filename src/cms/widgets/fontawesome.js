import React from 'react';
import createReactClass from 'create-react-class';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import ReactList from 'react-list';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function withIcon (icons) {
  const types = {
    fab: 'brands',
    far: 'regular',
    fas: 'solid',
  };

  if (!icons) {
    // eslint-disable-next-line
    return function({ field }) {
      return (
        <div>
          <strong>
            Fontawesome
            {types[icons.prefix]}
          </strong>
          {' '}
          not found but it registered to
          {' '}
          <em>{field.get('widget')}</em>
          {' '}
          widget.
        </div>
      );
    };
  }

  return createReactClass({
    propTypes: {
      onChange: PropTypes.func.isRequired,
      forID: PropTypes.string.isRequired,
      value: PropTypes.node,
      setActiveStyle: PropTypes.func.isRequired,
      setInactiveStyle: PropTypes.func.isRequired,
      classNameWrapper: PropTypes.string.isRequired,
      field: ImmutablePropTypes.mapContains({
        default: PropTypes.string,
      }).isRequired,
    },

    getDefaultProps() {
      return { value: '' };
    },

    getInitialState() {
      let library = Object.values(icons)
      
      return {
        iconLibrary: library.filter(function (item, index, self) {
          return self.indexOf(item) == index;
        }),
      };
    },

    render() {
      const {
        forID,
        field,
        value,
        setActiveStyle,
        setInactiveStyle,
        classNameWrapper,
        onChange,
      } = this.props;

      const { iconLibrary, active } = this.state;

      const setActiveState = () => {
        this.setState({active: true});
        setActiveStyle();
      }
      
      const setInactiveState = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setInactiveStyle();
          this.setState({active: false});
        }
      }

      const valueType = field.get('type', 'string');
      let cux = 0;
      let currentValue = value || field.get('default');

      // normalize current value
      if (currentValue) {
        if (typeof currentValue === 'string') {
          currentValue = currentValue.split(' ');
        } else if (currentValue.toJS) {
          // expect object or array
          currentValue = currentValue.toJS();
        }

        if (Array.isArray(currentValue)) {
          currentValue = { prefix: currentValue[0], iconName: currentValue[1] };
        }

        cux = iconLibrary.findIndex(
          l => l.prefix === currentValue.prefix && l.iconName === currentValue.iconName,
        );
      } else {
        currentValue = iconLibrary[cux];
      }

      return (
        <div
          id={forID}
          className={classNameWrapper}
          onBlur={setInactiveState}
          onFocus={setActiveState}
          style={{ overflow: 'auto', maxHeight: '420px' }}
        >
          <ReactList
            axis="y"
            initialIndex={cux}
            length={ iconLibrary.length }
            itemRenderer={(x, key) => {
              const color = cux === x ? '#5777ba' : '#aeb7c9';
              if (cux === x || active) {
                return (
                  <i
                    key={key}
                    role="button"
                    tabIndex={0}
                    title={iconLibrary[x].iconName}
                    onKeyDown={e => e}
                    onClick={() => {
                      let selected;
                      switch (valueType) {
                        case 'object':
                          selected = iconLibrary[x];
                          break;
                        case 'array':
                          selected = [iconLibrary[x].prefix, iconLibrary[x].iconName];
                          break;
                        case 'string':
                        default:
                          selected = `${iconLibrary[x].prefix} ${iconLibrary[x].iconName}`;
                          break;
                      }
  
                      onChange(selected);
                    }}
                    style={{
                      cursor: 'pointer', color, fontSize: 50, padding: 8,
                    }}
                  >
                    <Preview value={iconLibrary[x]} />
                  </i>
                );
              }}
              }
          />
        </div>
      );
    },
  });
}

const Brands = withIcon(fab);
const Regular = withIcon(far);
const Solid = withIcon(fas);

const Preview = ({ value, ...props }) => {
  if (!value) return '';
  const icon = typeof value === 'string' ? value.split(' ') : value;
  return <FontAwesomeIcon {...props} icon={icon} />;
};

export {
  Brands,
  Regular,
  Solid,
  Preview,
};