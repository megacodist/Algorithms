from copy import deepcopy
from pprint import pprint


def FindSubsets(a: set) -> list[set]:
    def FindSubsetsRecursively(
            a: set,
            partial: set,
            solution: list[set]
            ) -> None:

        # a & partial are IN parameters
        # Copying them not to change them outside of this function...
        partial = partial.copy()
        a = a.copy()

        # Checking end of recursion condition...
        if a == set():
            solution.append(partial)
            return
        
        # Going one level down in recursion...
        x = a.pop()
        FindSubsetsRecursively(
            a,
            partial,
            solution)
        partial.add(x)
        FindSubsetsRecursively(
            a,
            partial,
            solution)

    solution: list[set] = []
    FindSubsetsRecursively(a, set(), solution)
    return solution


if __name__ == '__main__':
    subsets = FindSubsets({1, 2, 3, 4})
    pprint(subsets, indent=4)
