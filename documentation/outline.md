# Digital Studio Parking

## Outline

We have a number of parking slots, numbered and un-numbered. These need allocating the week prior.

Users will need to request parking for the week in the format.

`[MON, TUES, WEDS]`

Weightings will be applied left-to-right to reflect order or preference.

`MON:5, TUES:4, WEDS:3`

Parking for the week will be decided by taking the highest n weights for each day
Where there are conflicts, RNG will be used to make fair decisions.

Any free slots after allocation will be available on a first come first serve basis (CS take precedence).

## Proposal

- Create a web frontend
  - Show allocated parking for the week
  - Submit parking requests
  - Allow free slots to be booked
  - Google authentication
- Guests (Booked on behalf of) have highest priority
- Adjustable base weights for access needs
- Numbered slots (pick one of the 7 numbered) for access needs and guests
- Waiting list for unlucky applicants, access needs top of the waiting list (late applicants)

### Nice to haves

- Slack integration for requesting parking.
- Karma system for repeatedly cancelling parking.
- Reminder mid-week, and end of the week (am)
- Advanced booking/requests
