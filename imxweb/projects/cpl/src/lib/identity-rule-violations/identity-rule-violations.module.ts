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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuiCoreModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

import { DataSourceToolbarModule, DataTableModule } from 'qbm';
import { IdentityRuleViolationsComponent } from './identity-rule-violations.component';
import { IdentityRuleViolationsMitigationControlComponent } from './identity-rule-violations-mitigation-control/identity-rule-violations-mitigation-control.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [IdentityRuleViolationsComponent, IdentityRuleViolationsMitigationControlComponent],
  imports: [CommonModule, EuiCoreModule, DataSourceToolbarModule, DataTableModule, TranslateModule, MatButtonModule, MatCardModule],
})
export class IdentityRuleViolationsModule {}
