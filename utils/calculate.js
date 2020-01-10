const byWeightAsc = (first, second) => first.weight - second.weight;
const byWeightDesc = (first, second) => second.weight - first.weight;
const randomValueFrom = (array) => array.splice(Math.floor(Math.random() * array.length), 1);

module.exports = (bids, numberOfSlots = 14) => {

    bids.sort(byWeightAsc);

    let weightGroups = [];
    let currentGroup = [];
    let currentGroupWeight = 1;
    for (bid of bids) {
        if (bid.weight > currentGroupWeight) {
            weightGroups.push(currentGroup);
            currentGroupWeight = bid.weight;
            currentGroup = [];
        }
        currentGroup.push(bid);
    }
    weightGroups.push(currentGroup);

    weightGroups.reverse();

    let selectedBids = [];
    for (group of weightGroups) {
        if (selectedBids.length < numberOfSlots) {
            if ((selectedBids.length + group.length) <= numberOfSlots) {
                selectedBids = [...selectedBids, ...group];
            } else {
                while (numberOfSlots - selectedBids.length > 0) {
                    let [value] = randomValueFrom(group);
                    selectedBids.push(value);
                }
            }
        }
    }

    return selectedBids.sort(byWeightDesc);
};