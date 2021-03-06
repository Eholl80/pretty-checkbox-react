import * as React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';

import Markdown from 'react-markdown';

type PropsTableProps = {
    displayName: string;
};

const PropsTable = ({ displayName }: PropsTableProps) => {
    const [dir, setDir] = React.useState('desc');
    const data = usePluginData('docusaurus-plugin-react-docgen-typescript');
    let props = {};

    if (data) {
        const comp = data.find(item => {
            return item.displayName === displayName;
        });

        if (comp) {
            props = comp.props;
        }
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th
                        className="table__sort"
                        onClick={React.useCallback(() => {
                            setDir(p => (p === 'desc' ? 'asc' : 'desc'));
                        }, [])}>
                        Name <i className={`mdi mdi-menu-${dir === 'desc' ? 'down' : 'up'}`} />
                    </th>
                    <th>Required</th>
                    <th>Type</th>
                    <th>Default Value</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(props)
                    .sort((a, b) => {
                        const desc = dir === 'desc';

                        if (a < b) {
                            return desc ? -1 : 1;
                        }

                        if (a > b) {
                            return desc ? 1 : -1;
                        }

                        return 0;
                    })
                    .map(key => {
                        return (
                            <tr key={key}>
                                <td>
                                    <code>{props[key].name}</code>
                                </td>
                                <td>{props[key].required || 'No'}</td>
                                <td>
                                    <code>
                                        {props[key].type.name === 'enum'
                                            ? props[key].type.value
                                                  .map(({ value }) => value)
                                                  .join(' | ')
                                            : props[key].type.name}
                                    </code>
                                </td>
                                <td>{props[key].defaultValue?.value}</td>
                                <td>
                                    <Markdown source={props[key].description} />
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};

export default PropsTable;
