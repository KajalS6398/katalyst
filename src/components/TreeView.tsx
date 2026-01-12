// "use client";
// import React, { useState, Children, isValidElement, ReactNode } from "react";
// import { HiChevronDown, HiChevronRight } from "react-icons/hi";
// import { cn } from "@/utils/util";

// /* =========================================================
//    Types
// ========================================================= */

// interface TreeViewProps {
//   children: React.ReactNode;
//   "aria-label": string;
//   className?: string;
//   flat?: boolean;
//   defaultExpandedIds?: string[];
//   expandedIds?: string[];
//   onExpandedChange?: (ids: string[]) => void;
//   allowMultiple?: boolean;
//   expandTopLevelByDefault?: boolean;
// }

// interface TreeViewItemProps {
//   id: string;
//   children: React.ReactNode;
//   className?: string;
//   current?: boolean;
//   level?: number;
//   expanded?: boolean;
//   selected?: boolean;
//   flat?: boolean;
//   onToggle?: (id: string) => void;
//   onSelect?: (id: string) => void;
// }

// interface TreeViewSubTreeProps {
//   children: React.ReactNode;
//   expanded?: boolean;
//   flat?: boolean;
//   className?: string;
//   state?: "loading";
//   count?: number;
// }

// /* =========================================================
//    Visuals
// ========================================================= */

// const TreeViewLeadingVisual: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => <span className="flex items-center shrink-0">{children}</span>;

// const TreeViewTrailingVisual: React.FC<{
//   children: React.ReactNode;
//   label?: string;
// }> = ({ children, label }) => (
//   <span aria-label={label} className="ml-auto flex items-center shrink-0">
//     {children}
//   </span>
// );

// /* =========================================================
//    SubTree 
// ========================================================= */

// const TreeViewSubTree: React.FC<TreeViewSubTreeProps> = ({
//   children,
//   expanded = false,
//   flat = false,
//   className,
//   state,
//   count,
// }) => {
//   // We consume 'flat' and 'expanded' here so they don't leak to the <ul>
//   if (flat) return null;

//   return (
//     <ul
//       role="group"
//       className={cn(
//         "list-none m-0 overflow-hidden transition-all duration-300 ease-in-out",
//         expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
//         className
//       )}
//     >
//       {state === "loading" ? (
//         <li className="pl-6 py-1 text-gray-500 italic">
//           Loading{count ? ` ${count} items...` : "..."}
//         </li>
//       ) : (
//         children
//       )}
//     </ul>
//   );
// };

// /* =========================================================
//    Item
// ========================================================= */

// const TreeViewItem: React.FC<TreeViewItemProps> = ({
//   id,
//   children,
//   className,
//   expanded = false,
//   selected = false,
//   flat = false,
//   level = 0,
//   current,
//   onToggle,
//   onSelect,
// }) => {
//   const leading: ReactNode[] = [];
//   const trailing: ReactNode[] = [];
//   const content: ReactNode[] = [];
//   const subTrees: React.ReactElement[] = [];

//   // Sort children into slots
//   Children.forEach(children, (child) => {
//     if (!isValidElement(child)) {
//       content.push(child);
//       return;
//     }
    
//     if (child.type === TreeViewLeadingVisual) {
//       leading.push(child);
//     } else if (child.type === TreeViewTrailingVisual) {
//       trailing.push(child);
//     } else if (child.type === TreeViewSubTree) {
//       subTrees.push(child);
//     } else {
//       content.push(child);
//     }
//   });

//   const hasSubTree = subTrees.length > 0;

//   const handleSelect = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     onSelect?.(id);
//     if (hasSubTree && !flat) onToggle?.(id);
//   };

//   return (
//     <>
//       <li
//         role="treeitem"
//         aria-expanded={hasSubTree && !flat ? (expanded ? "true" : "false") : undefined}
//         aria-selected={selected ? "true" : "false"}
//         aria-current={current ? "true" : undefined}
//         tabIndex={selected ? 0 : -1}
//         onClick={handleSelect}
//         style={{ paddingLeft: level * 16 + 8 }}
//         className={cn(
//           "flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors select-none",
//           "hover:bg-gray-100 dark:hover:bg-gray-800",
//           selected && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100",
//           className
//         )}
//       >
//         {!leading.length && hasSubTree && !flat && (
//           <span className="transition-transform duration-150 shrink-0">
//             {expanded ? <HiChevronDown size={18} /> : <HiChevronRight size={18} />}
//           </span>
//         )}
//         {leading}
//         <span className="flex-1 truncate">{content}</span>
//         {trailing}
//       </li>

//       {/* Pass the expanded/flat state down to the SubTree components. 
//           The SubTree component is responsible for not passing these to the <ul>.
//       */}
//       {subTrees.map((subTree, index) => 
//         React.cloneElement(subTree, {
//           expanded,
//           flat,
//           key: `${id}-subtree-${index}`,
//         })
//       )}
//     </>
//   );
// };

// /* =========================================================
//    TreeView Root
// ========================================================= */

// export const TreeView: React.FC<TreeViewProps> & {
//   Item: React.FC<TreeViewItemProps>;
//   SubTree: React.FC<TreeViewSubTreeProps>;
//   LeadingVisual: typeof TreeViewLeadingVisual;
//   TrailingVisual: typeof TreeViewTrailingVisual;
// } = ({
//   children,
//   "aria-label": ariaLabel,
//   className,
//   flat = false,
//   defaultExpandedIds = [],
//   expandedIds,
//   onExpandedChange,
//   allowMultiple = true,
//   expandTopLevelByDefault = false,
// }) => {
//   const [internalExpanded, setInternalExpanded] = useState<Set<string>>(
//     () => new Set(defaultExpandedIds)
//   );
//   const [selectedId, setSelectedId] = useState<string | null>(null);

//   const expandedSet = expandedIds ? new Set(expandedIds) : internalExpanded;

//   const toggleNode = (id: string) => {
//     const update = (prev: Set<string>) => {
//       const next = new Set(prev);
//       if (allowMultiple) {
//         next.has(id) ? next.delete(id) : next.add(id);
//       } else {
//         const wasExpanded = next.has(id);
//         next.clear();
//         if (!wasExpanded) next.add(id);
//       }
//       return next;
//     };

//     if (expandedIds && onExpandedChange) {
//       onExpandedChange(Array.from(update(expandedSet)));
//     } else {
//       setInternalExpanded(update);
//     }
//   };

//   /**
//    * Recursively clones children to inject level, expanded state, and handlers.
//    * Only clones TreeViewItem to prevent passing props to standard HTML/Visuals.
//    */
//   const enhance = (nodes: React.ReactNode, level = 0): React.ReactNode =>
//     Children.map(nodes, (child) => {
//       if (!isValidElement(child)) return child;

//       if (child.type === TreeViewItem) {
//         return React.cloneElement(child as React.ReactElement<TreeViewItemProps>, {
//           level,
//           expanded: expandedSet.has(child.props.id),
//           selected: selectedId === child.props.id,
//           onToggle: toggleNode,
//           onSelect: setSelectedId,
//           flat,
//           // Enhance the grandchildren (nested items)
//           children: enhance(child.props.children, level + 1),
//         });
//       }

//       // If it's not an Item (e.g. a divider or custom component), return as is
//       return child;
//     });

//   return (
//     <ul
//       role="tree"
//       aria-label={ariaLabel}
//       className={cn("list-none p-0 m-0 text-sm", className)}
//     >
//       {enhance(children)}
//     </ul>
//   );
// };

// /* =========================================================
//    Attach Components
// ========================================================= */

// TreeView.Item = TreeViewItem;
// TreeView.SubTree = TreeViewSubTree;
// TreeView.LeadingVisual = TreeViewLeadingVisual;
// TreeView.TrailingVisual = TreeViewTrailingVisual;

// export default TreeView;