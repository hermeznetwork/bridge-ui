import React, { FC } from "react";

import useListStyles from "src/views/home/components/list/list.styles";
import Card from "src/views/shared/card/card.view";
import Typography from "src/views/shared/typography/typography.view";
import Icon from "src/views/shared/icon/icon.view";
import { Chain, Token } from "src/domain";
import Portal from "src/views/shared/portal/portal.view";

interface ChainList {
  type: "chain";
  items: Chain[];
  onClick: (chain: Chain) => void;
}

interface TokenList {
  type: "token";
  items: Token[];
  onClick: (token: Token) => void;
}

type List = ChainList | TokenList;

interface ListProps {
  placeholder: string;
  list: List;
  onClose: () => void;
}

const List: FC<ListProps> = ({ list, onClose }) => {
  const classes = useListStyles();

  const onOutsideClick = (event: React.MouseEvent) => {
    if (event.target !== event.currentTarget) return;
    onClose();
  };

  return (
    <Portal>
      <div className={classes.background} onClick={onOutsideClick}>
        <Card className={classes.card}>
          <div className={classes.list}>
            {list.type === "chain"
              ? list.items.slice(0, 20).map((element) => {
                  return (
                    <button
                      className={classes.button}
                      key={element.name}
                      onClick={() => list.onClick(element)}
                    >
                      <element.Icon className={classes.icon} />
                      <Typography type="body1">{element.name}</Typography>
                    </button>
                  );
                })
              : list.items.slice(0, 20).map((element) => {
                  return (
                    <button
                      className={classes.button}
                      key={element.address}
                      onClick={() => list.onClick(element)}
                    >
                      <Icon url={element.logoURI} size={24} />
                      <Typography type="body1">{element.name}</Typography>
                    </button>
                  );
                })}
          </div>
        </Card>
      </div>
    </Portal>
  );
};

export default List;
