class Sorter {
    constructor() {
        this.data = [];
        this.comparator = (a, b) => a - b;
    }

    get length() {
        return this.data.length;
    }

    add(element) {
        this.data.push(element);
    }

    at(index) {
        return this.data[index];
    }

    toArray() {
        return this.data;
    }

    sort(indices) {
        const tmp = [];

        for (let i = 0; i < indices.length; i++) {
            tmp.push(this.data[indices[i]]);
        }
        indices.sort();
        tmp.sort(this.comparator);
        for (let i = 0; i < indices.length; i++) {
            this.data[indices[i]] = tmp[i];
        }
    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}

module.exports = Sorter;