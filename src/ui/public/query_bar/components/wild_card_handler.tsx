/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {
  EuiHorizontalRule,
  EuiLink,
  EuiPopover,
  EuiPopoverTitle,
  EuiSpacer,
  EuiText,
} from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n/react';
import React, { Component } from 'react';

const prontoDLSupport = 'ms-outlook://compose?to=DL-eBay-Pronto-Support@ebay.com&subject=Query Options';


interface State {
  iswPopoverOpen: boolean;
}

interface Props {
  wpopover : boolean;
}


export class WildCardHandler extends Component<Props, State> {

  public state = {
    iswPopoverOpen: false,
  };

  public componentWillReceiveProps(nextProps: Props ,prevProps:State){
    if(nextProps.wpopover != prevProps.iswPopoverOpen){
      this.state.iswPopoverOpen =nextProps.wpopover
    }
   /* else if(nextProps.wpopover){
      this.state.iswPopoverOpen = false;
    }*/
  }

  public render() {
    const button = (
      <EuiSpacer size="m" />
    );

    return (
      <EuiPopover
        id="popover"
        className="eui-displayBlock"
        ownFocus
        anchorPosition="upCenter"
        button={button}
        isOpen={this.state.iswPopoverOpen}
        closePopover={this.wclosePopover}
        withTitle
      >
        <EuiPopoverTitle>
          <FormattedMessage
            id="common.ui.queryBar.syntaxOptionsTitle"
            defaultMessage="Query options"
          />
        </EuiPopoverTitle>
        <div style={{ width: '350px' }}>
          <EuiText>
            <p>
              <FormattedMessage
                id="common.ui.queryBar.syntaxOptionsDescription"
                defaultMessage="Please segment the query result set by adding a filter for wildcard(*)searches .
                 As the data is extensive it would be good to avoid wildcard on entire data set for > 24 hours time range.
                 Also try using the interactive query builder in Options - query features "
             />
            </p>
          </EuiText>

          <EuiSpacer size="m" />

          <EuiHorizontalRule margin="s" />

          <EuiText size="xs">
            <p>
              <FormattedMessage
                id="common.ui.queryBar.luceneDocsDescription"
                defaultMessage="Please reach out to {docsLink} for any queries"
                values={{
                  docsLink: (
                    <EuiLink href={prontoDLSupport} target="_blank">
                      <FormattedMessage
                        id="common.ui.queryBar.luceneDocsDescription.docsLinkText"
                        defaultMessage="Pronto Support"
                      />
                    </EuiLink>
                  ),
                }}
              />
            </p>
          </EuiText>
        </div>
      </EuiPopover>
    );
  }

  private wclosePopover = () => {
    this.setState({
      iswPopoverOpen: false,
    });
  };

}
