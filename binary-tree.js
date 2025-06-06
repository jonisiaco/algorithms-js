const tree = {
    valor: 1,
    izq: {
        valor: 2,
        izq: {
            valor: 4,
            izq: {
                valor: 7,
                izq: null,
                der: null
            },
            der: null
        },
        der: null
    },
    der: {
        valor: 3,
        izq: null,
        der: {
            valor: 5,
            der: {
                valor: 8,
                izq: null,
                der: null
            },
            izq: null
        }
    }
};

// return the sum of all nodes whose leaves are at the deepest level
function deepestLeavesSum(root) {
    let maxNivel = 0;
    let suma = 0;

    function dfs(nodo, nivel) {
        if (!nodo) return;

        if (!nodo.izq && !nodo.der) {
            if (nivel > maxNivel) {
                maxNivel = nivel;
                suma = nodo.valor;
            } else if (nivel === maxNivel) {
                suma += nodo.valor;
            }
        }

        dfs(nodo.izq, nivel + 1);
        dfs(nodo.der, nivel + 1);
    }

    dfs(root, 0);
    return suma;
}

console.log(deepestLeavesSum(tree));