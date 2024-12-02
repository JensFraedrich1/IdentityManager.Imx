/*
 * ONE IDENTITY LLC. PROPRIETARY INFORMATION
 *
 * This software is confidential.  One Identity, LLC. or one of its affiliates or
 * subsidiaries, has supplied this software to you under terms of a
 * license agreement, nondisclosure agreement or both.
 *
 * You may not copy, disclose, or use this software except in accordance with
 * those terms.
 *
 *
 * Copyright 2024 One Identity LLC.
 * ALL RIGHTS RESERVED.
 *
 * ONE IDENTITY LLC. MAKES NO REPRESENTATIONS OR
 * WARRANTIES ABOUT THE SUITABILITY OF THE SOFTWARE,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE, OR
 * NON-INFRINGEMENT.  ONE IDENTITY LLC. SHALL NOT BE
 * LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE
 * AS A RESULT OF USING, MODIFYING OR DISTRIBUTING
 * THIS SOFTWARE OR ITS DERIVATIVES.
 *
 */

import { Component, Input } from '@angular/core';

import { IReadValue } from '@imx-modules/imx-qbm-dbts';

@Component({
  selector: 'imx-peer-group',
  templateUrl: './peer-group.component.html',
  styleUrls: ['./peer-group.component.scss'],
})
export class PeerGroupComponent {
  @Input() public item: { CountInPeerGroup: IReadValue<number> };
  @Input() public peerGroupSize: number;
  @Input() public width = '100%';

  public getPeerGroupPercentage(): number {
    if ((this.peerGroupSize || 0) === 0) {
      return 0;
    }

    return Math.min(Math.abs(Math.round(100.0 * ((this.item.CountInPeerGroup.value || 0) / this.peerGroupSize) - 0.5)), 100);
  }
}
