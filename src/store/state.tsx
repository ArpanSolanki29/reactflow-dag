export type Position = {
    x: Number; y: Number;
}

export type Node = {
    id: string;
    kind: string;
    position: Position;
}

export type Edge = {
    id: string;
    source: Node;
    target: Node;
    startPosition: Position;
    endPosition: Position;
}

export type DAGState = {
    nodes: Node[];
    edges: Edge[];
}