import { T } from '../../../../translate-marker';
import globalHelptext from 'app/helptext/global-helptext';

export default {
    users: {
        title: T('Dataset Users'),
        action_label: T('Define Quotas for Selected Users'),
        dialog: {
          title: T('Define quotas for selected users'),
          list: {
            placeholder: T('Selected Users'),
            tooltip: T('This list can be edited in the table. A quota change \
 will apply to all users in this list.')
          },
          data_quota: {
            placeholder: T('User Data Quota ') + globalHelptext.human_readable.suggestion_label,
            tooltip: T('Enter the amount of disk space that may be consumed by the selected users. \
 Enter 0 (zero) to remove the quota.') + globalHelptext.human_readable.suggestion_tooltip
          },
          obj_quota: {
            placeholder: T('User Object Quota'),
            tooltip: T('Enter the number of objects which may be owned by each of the selected users. \
Enter 0 (zero) to remove the quota.'),
          }

        }
      },

    groups: {
      title: T('Dataset Groups'),
      action_label: T('Define Quotas for Selected Groups'),
      dialog: {
        title: T('Define quotas for selected groups'),
        list: {
          placeholder: T('Selected Groups'),
          tooltip: T('This list can be edited in the table. A quota change \
will apply to all groups in this list.')
        },
        data_quota: {
          placeholder: T('Group Data Quota ') + globalHelptext.human_readable.suggestion_label,
          tooltip: T('Enter the amount of disk space that may be consumed by the selected groups. \
Enter 0 (zero) to remove the quota.') + globalHelptext.human_readable.suggestion_tooltip
        },
        obj_quota: {
          placeholder: T('Group Object Quota'),
          tooltip: T('Enter the number of objects which may be owned by each of the selected groups. \
Enter 0 (zero) to remove the quota.'),
        }

      }
    },

    shared: {
        input_error: globalHelptext.human_readable.input_error,
        set: T('Set Quota'),
        cancel: T('Cancel')
    }
  }

